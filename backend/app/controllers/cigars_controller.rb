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
        cigar = Cigar.new(cigar_params)
        cigar.save
        render json: cigar        
    end

    def destroy
        cigar = Cigar.find(params[:id])
        if cigar.destroy
            render json: {id: cigar.id }
        end
    end

    private

    def cigar_params
        params.require(:cigar).permit(:name, :description, :price, :style_id)
    end

end