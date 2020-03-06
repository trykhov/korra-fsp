class ChangeTables < ActiveRecord::Migration[5.2]
  def change
    change_column :answers, :answer, :text
    drop_column :questions, :text
  end
end
