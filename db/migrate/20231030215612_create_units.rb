class CreateUnits < ActiveRecord::Migration[7.1]
  def change
    create_table :units do |t|
      t.string :unit_name
      t.references :course, null: false, foreign_key: true

      t.timestamps
    end
  end
end
