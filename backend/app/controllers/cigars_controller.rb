class CigarsController < ApplicationController
    
    def index
        cigars = Cigar.all
        render json: CigarSerializer.new(cigars)
    end

    def show
        cigar = Cigar.find(params[:id])        
        render json: CigarSerializer.new(cigar)
    end

    def create
        binding.pry
        cigar = Cigar.new(cigar_params)
        render json: cigar
        
    end

    private

    def cigar_params
        params.require(:cigar).permit(:name, :description, :price)
    end

end