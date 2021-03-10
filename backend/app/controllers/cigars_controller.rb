class CigarsController < ApplicationController
    
    def index
        cigars = Cigar.all
        render json: CigarSerializer.new(cigars)
    end

    def show
        cigar = Cigar.find(params[:id])
        
        render json: CigarSerializer.new(cigar)

    end

end