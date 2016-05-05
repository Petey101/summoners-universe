class Battles < ActiveRecord::Migration
  def change
  	create_table :battles do |t|
  		t.text :question_text, null: false
  		t.text :possible_answers, array: true, default: []
  		t.text :correct_answer, null: false

  		t.timestamps null: false
  	end
  end
end
