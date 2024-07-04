import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const ProductDetails = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[400px]" />
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Product Name</h1>
          <p className="text-2xl">$99.99</p>
          <p>Product description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button>Add to Cart</Button>
        </div>
      </div>
      <Tabs defaultValue="specifications">
        <TabsList className="space-x-4">
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="qa">Q&A</TabsTrigger>
        </TabsList>
        <TabsContent value="specifications">
          <p>Specifications content goes here.</p>
        </TabsContent>
        <TabsContent value="reviews">
          <p>Reviews content goes here.</p>
        </TabsContent>
        <TabsContent value="qa">
          <p>Q&A content goes here.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductDetails;