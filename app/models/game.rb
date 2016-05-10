class Game < ActiveRecord::Base
	has_many :battle_games
	has_many :battles, through: :battle_games
	belongs_to :user

  before_save :generate_remaining_time

  private
  def generate_remaining_time
    self.time_remaining = DateTime.now + 10.minutes
  end

end