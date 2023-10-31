class CreateTopics < ActiveRecord::Migration[7.1]
  def change
    create_table :topics do |t|
      t.string :topic_name
      t.text :topic_content
      t.references :unit, null: false, foreign_key: true

      t.timestamps
    end
  end
end
