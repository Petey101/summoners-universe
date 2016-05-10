class Games < ActiveRecord::Migration
  def change
  	create_table :games do |t|
  		t.boolean :win, default: false, null: false
  		t.references :user, index: true, null: false
  		t.string :picked_champion, null: false
  		t.string :completed, default: false, null: false
      t.datetime :time_remaining, null: false
  		
  		t.timestamps null: false
  	end
  end
end
