class BattleGames < ActiveRecord::Migration
  def change
  	create_table :battle_games do |t|
  		t.references :battle, index: true, null: false
  		t.references :game, index: true, null: false
  		t.boolean :solved, default: false
  	end
  end
end
