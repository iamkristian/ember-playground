json.array!(@people) do |person|
  json.extract! person, :id, :name, :address, :city, :phone, :email
  json.url person_url(person, format: :json)
end
