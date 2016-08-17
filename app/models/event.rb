class Event < ApplicationRecord
	mount_uploader:picture, PictureUploader
end
