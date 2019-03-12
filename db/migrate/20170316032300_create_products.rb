class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
#      t.numeric :id#
      t.text :title
      t.integer :item
      t.float :price
      t.text :remark

      t.timestamps
    end
  end
end
