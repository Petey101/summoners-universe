class Battles < ActiveRecord::Migration
  def change
  	create_table :battles do |t|
  		t.boolean :win, default: false
  		t.references :user, index: true, null: false
  		t.references :question, index: true, null: false

  		t.timestamps null: false
  	end
  end
end
