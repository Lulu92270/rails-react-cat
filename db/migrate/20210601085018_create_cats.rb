class CreateCats < ActiveRecord::Migration[6.1]
  def change
    create_table :cats do |t|
      t.string "id_from_atelier", null: false
      t.string "url", null: false
      t.integer "score", default: 0

      t.timestamps
    end
  end
end
