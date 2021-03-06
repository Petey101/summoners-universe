class Game < ActiveRecord::Base
	has_many :battle_games
	has_many :battles, through: :battle_games
	belongs_to :user

  before_save :generate_time_limit

  private
  def generate_time_limit
    Time.zone = "EST"
    self.time_limit = Time.zone.now + 10.minutes
  end

end