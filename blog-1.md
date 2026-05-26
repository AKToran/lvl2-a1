# Clean Code: How Pick and Omit keep TypeScript DRY

In TypeScript we often start with a Master Interface - a detailed model of a component. However, we rarely need every single property of that model in every part of the application. We often fall into the trap of manually creating new, smaller interfaces that mirror parts of the original. This leads to code duplication and "syncing nightmare", where updating the master interface requires updating 5 other manually created slices. This is where the **Pick** and **Omit** utility types become essential for keeping our codebase DRY(Don't Repeat Yourself).  

A product card page needs different data than a product details page, even though they both reference a "Product" object. The Master Interface: Lets say we are building an application with a central Product interface:

```
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  rating: number;
}
```
Now, suppose we want to build a Product Card component that only displays the name and price. The **Pick** utility type allows us to create a new type by selecting a set of properties from an existing interface. This ensures the specialized slice remains directly linked to the source.

```
type ProductCard = Pick<Product, 'name' | 'price'>;
```
By using Pick, if we change the type of name in the master interface, Product Card inherits that change automatically. We have successfully created a specialized slice without duplicating any code.

While Pick is great for small selections, sometimes it is easier to say what we don't want. The **Omit** utility type creates a new type by taking the master interface and removing specific keys. Suppose we don't want the id and rating to be created manually.

```
type CreateProduct = Omit<Product, 'id' | 'rating'>;
```
CreateProduct still relies on the original Product interface.

By using these utility types we avoid fragmented web of similar interfaces, keep our codebase clean, easy to manage and follow the DRY convention. 
