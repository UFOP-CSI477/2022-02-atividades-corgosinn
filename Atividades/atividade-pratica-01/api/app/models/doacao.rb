class Doacao < ApplicationRecord
  belongs_to :local_coleta

  has_many :produtos
end
