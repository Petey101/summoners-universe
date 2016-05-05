class Battles < ActiveRecord::Migration
  def change
  	create_table :battles do |t|
  		t.text :question_text, null: false
  		t.text :possible_answers, null: false
  		t.text :correct_answer, null: false
  		t.string :enemy_champion, null: false

  		t.timestamps null: false
  	end
  end
end
