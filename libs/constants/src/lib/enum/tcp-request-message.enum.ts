enum INVOICE {
  CREATE = 'invoice.create',
  GET_LIST = 'invoice.get_list',
  UPDATE = 'invoice.update',
}

enum PRODUCT {
  CREATE = 'product.create',
  GET_LIST = 'product.get_list',
}

export const TCP_REQUEST_MESSAGE = {
  INVOICE,
  PRODUCT,
}
