class CreateNodes < ActiveRecord::Migration[5.2]
  def change
    create_table :nodes do |t|
      t.integer :nodeable_id
      t.string :nodeable_type
      t.string :name

      t.timestamps
    end
  end
end
