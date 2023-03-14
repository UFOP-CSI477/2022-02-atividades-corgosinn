class Produto < ApplicationRecord
  belongs_to :doacao

  has_many :distribuicaos
end
