import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[400px]" />
        <h1 className="text-4xl font-bold">Welcome to Our Electronics Store</h1>
        <Button onClick={() => navigate("/products")}>Shop Now</Button>
      </section>

      {/* Featured Products */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((product) => (
            <Card key={product}>
              <CardHeader>
                <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              </CardHeader>
              <CardContent>
                <CardTitle>Product {product}</CardTitle>
                <p>$99.99</p>
              </CardContent>
              <CardFooter>
                <Button>Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold text-center">What Our Customers Say</h2>
        <Tabs defaultValue="testimonial-1">
          <TabsList className="flex justify-center space-x-4">
            <TabsTrigger value="testimonial-1">Customer 1</TabsTrigger>
            <TabsTrigger value="testimonial-2">Customer 2</TabsTrigger>
            <TabsTrigger value="testimonial-3">Customer 3</TabsTrigger>
          </TabsList>
          <TabsContent value="testimonial-1">
            <p className="text-center">"Great products and excellent service!"</p>
          </TabsContent>
          <TabsContent value="testimonial-2">
            <p className="text-center">"I love my new gadget. Highly recommend!"</p>
          </TabsContent>
          <TabsContent value="testimonial-3">
            <p className="text-center">"Fast shipping and great prices."</p>
          </TabsContent>
        </Tabs>
      </section>

      {/* Newsletter Subscription */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-semibold">Subscribe to Our Newsletter</h2>
        <div className="flex justify-center space-x-2">
          <Input placeholder="Enter your email" />
          <Button>Subscribe</Button>
        </div>
      </section>
    </div>
  );
};

export default Index;