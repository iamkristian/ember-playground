class PersonSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :email
end
