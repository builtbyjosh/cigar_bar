class CreateCigars < ActiveRecord::Migration[6.1]
  def change
    create_table :cigars do |t|
      t.string :name
      t.string :description
      t.integer :price
      t.integer :type_id

      t.timestamps
    end
  end
end
