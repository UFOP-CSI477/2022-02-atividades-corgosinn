class Pessoa < ApplicationRecord
  belongs_to :cidade
  belongs_to :tipo_sanguinio

  has_many :doacaos
end
