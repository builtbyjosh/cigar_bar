class FixColumnName < ActiveRecord::Migration[6.1]
  def change
    rename_column :cigars, :type_id, :style_id
  end
end
