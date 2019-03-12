class CreateOrders < ActiveRecord::Migration[5.0]
  def change
    create_table :orders do |t|
      t.text :time
      t.integer :secke
      t.integer :stage
      t.text :list

      t.timestamps
    end
  end
end
