class CigarSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :price, :style
  
end
