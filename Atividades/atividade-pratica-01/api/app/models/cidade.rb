class Cidade < ApplicationRecord
  belongs_to :estado

  has_many :pessoas
end
