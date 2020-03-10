class UpdateComments < ActiveRecord::Migration[5.2]
  def change
    rename_column :comments, :question_id, :answer_id
  end
end
