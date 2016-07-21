class User < ActiveRecord::Base
  has_many :games
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
         
  def self.get_skin_image(champ)
    url = "https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=skins&api_key=#{LOL_KEY}"
    uri = URI(url)
    response = Net::HTTP.get(uri)
    all_champs = JSON.parse(response)
    "#{all_champs['data'][champ]['key']}_#{all_champs['data'][champ]['skins'].sample['num']}"
  end

  def games_won
    self.games.where(completed:true, win:true)
  end

  def games_lost
    self.games.where(completed:true, win:false)
  end
  
  def winning_champs(champ)
    self.games_won.where(picked_champion: champ)
  end

  def losing_champs(champ)
    self.games_lost.where(picked_champion: champ)
  end
  
  def get_win_ratio
    ((self.games_won.length).round(2) / (self.games.length).round(2)) * 100 
  end

  def get_loss_ratio
    ((self.games_lost.length).round(2) / (self.games.length).round(2)) * 100 
  end

  def get_champ_win_ratio(champ)
    ((self.winning_champs(champ).length).round(2) / (self.games_won.length).round(2)) * 100
  end

  def get_champ_loss_ratio(champ)
    ((self.losing_champs(champ).length).round(2)/ (self.games_lost.length).round(2)) * 100
  end

end
