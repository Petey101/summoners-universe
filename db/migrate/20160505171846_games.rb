class Games < ActiveRecord::Migration
  def change
  	create_table :games do |t|
  		t.boolean :win, default: false
  		t.references :user, index: true, null: false
  		t.references :question, index: true, null: false

  		t.timestamps null: false
  	end
  end
end
