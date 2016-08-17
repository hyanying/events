json.extract! event, :id, :title, :description, :picture, :date, :created_at, :updated_at
json.url event_url(event, format: :json)