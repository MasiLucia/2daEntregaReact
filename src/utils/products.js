const products = [
    {id: 1, title:'Cuerdita', category:'juguetes', description: 'De materiales altamente resistentes para la diversión de tu cachorro!', price: 100, pictureUrl: 'https://www.consumer.es/wp-content/uploads/2019/07/img_perros-juguetes-favoritos-2-art.jpg', stock: 8},
    {id: 2, title:'Huesito', category:'juguetes', description: 'De materiales altamente resistentes para la diversión de tu cachorro!', price: 100, pictureUrl: 'https://www.consumer.es/wp-content/uploads/2019/07/img_perro-huesos-juguetes1-art.jpg', stock: 6},
    {id: 3, title:'Peluche', category:'juguetes', description: 'De materiales altamente resistentes para la diversión de tu cachorro!', price: 100, pictureUrl: 'https://www.consumer.es/wp-content/uploads/2019/07/img_perros-juguetes-favoritos-3-art.jpg', stock: 10},
    {id: 4, title:'Pelotita', category:'juguetes', description: 'De materiales altamente resistentes para la diversión de tu cachorro!', price: 100, pictureUrl: 'https://imagenes.20minutos.es/files/image_656_370/files/fp/uploads/imagenes/2020/02/12/el-perro-finny-mostrando-sus-habilidades.r_d.414-170-9954.jpeg', stock: 8},
    {id: 5, title:'Alimento', category:'alimentos', description: 'La más llena de proteinas y vitaminas', price: 100, pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_733120-MLA50131748752_052022-V.jpg', stock: 50},
    {id: 6, title:'Alimento', category:'alimentos', description: 'La más llena de proteinas y vitaminas', price: 100, pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_733120-MLA50131748752_052022-V.jpg', stock: 3},
    {id: 7, title:'Buzo', category:'ropa', description: 'Este invierno no dejes que pase frio ;)', price: 100, pictureUrl: 'https://www.petlisis.com.ar/img/Producto/1429/01-1612902130-61393ca1d2df2.jpeg', stock: 10},
    {id: 8, title:'Pullover', category:'ropa', description: 'Este invierno no dejes que pase frio ;)', price: 100, pictureUrl: 'https://media.istockphoto.com/photos/happy-dog-wearing-pink-warm-knitted-sweater-playing-at-fine-fall-day-picture-id1056437738?k=20&m=1056437738&s=612x612&w=0&h=BPHXAjyNu_8oBBTKSj0sokSd7rDk0nPqjSkts-g72d4=', stock: 5}
]


export const getAllProducts = () => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        return resolve(products);
      }, 2000)
    })
  
    return promise
  };
  
  export const getProduct = (id) => {
    const promise = new Promise((resolve) => {
      const result = products.find((product) => product.id === parseInt(id))
      setTimeout(() => {
        return resolve(result);
      }, 2000)
    })
  
    return promise
  };
  
  export const getProductsByCategory = (categoryId) => {
    const promise = new Promise((resolve) => {
      const results = products.filter((product) => product.category === categoryId);
      setTimeout(() => {
        return resolve(results);
      }, 2000)
    })
  
    return promise
  };