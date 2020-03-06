class RenameColumnAnswers < ActiveRecord::Migration[5.2]
  def change
    rename_column :answers, :answer, :text
  end
end
