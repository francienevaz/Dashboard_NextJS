import { PrismaClient } from "@prisma/client/extension";

const prismaClient = new PrismaClient();

const ProductsPage = async () => {
  await prismaClient.products.findMany();

  //chamar o banco de dados
  return (
    <>
      <h1>Products Page</h1>
    </>
  );
};

export default ProductsPage;
