import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const categoryColors = {
  tech: "bg-blue-100 text-blue-800",
  health: "bg-green-100 text-green-800", 
  business: "bg-purple-100 text-purple-800",
  beauty: "bg-pink-100 text-pink-800",
  education: "bg-yellow-100 text-yellow-800"
};

const categoryLabels = {
  tech: "Tecnologia",
  health: "Saúde",
  business: "Negócios", 
  beauty: "Beleza",
  education: "Educação"
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="product-card h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge className={categoryColors[product.category]}>
            {categoryLabels[product.category]}
          </Badge>
        </div>
        <CardTitle className="text-xl font-bold text-primary line-clamp-2">
          {product.name}
        </CardTitle>
        <CardDescription className="text-muted-foreground line-clamp-3">
          {product.shortDescription}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-end">
        <Link to={`/produto/${product.id}`}>
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group">
            Saiba mais
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};