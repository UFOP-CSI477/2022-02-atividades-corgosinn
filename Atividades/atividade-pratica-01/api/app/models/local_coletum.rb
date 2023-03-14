class LocalColetum < ApplicationRecord
  belongs_to :cidade

  has_many :doacaos
end
