class CigarSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :description, :price, :style
  
end
