<template>
    <h1 id="B">Javascript Project in Vue js</h1>
    <center>
        <div id="body">
            <input type="file" @change="loadFile" /><br /><br />
            <img id="output" /><br /><br />
            <form>
                <lable>Product Brand:-</lable><br />
                <input type="text" placeholder="Brand" v-model="product.brand" /><br /><br />
                <lable>Product Name:-</lable><br />
                <input type="text" placeholder="Name" v-model="product.name" /><br /><br />
                <lable>Product Model:-</lable><br />
                <input type="text" placeholder="Model" v-model="product.model" /><br /><br />
                <lable>Product Color:-</lable><br />
                <input type="text" placeholder="Color" v-model="product.color" /><br /><br />
                <lable>Product Description:-</lable><br />
                <input type="number" placeholder="Price" v-model="product.price" /><br /><br />
                <textarea placeholder="Description" v-model="product.description"></textarea><br /><br />
                <button type="button" @click="onFormSubmit">{{ submitButtonText }}</button><br /><br />
            </form>
        </div>
    </center><br /><br /><br />
    <div id="table">
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Brand</th>
                    <th>Name</th>
                    <th>Model</th>
                    <th>Color</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, index) in products" :key="index">
                    <td><img :src="product.image" :alt="product.name" width="100" /></td>
                    <td>{{ product.brand }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.model }}</td>
                    <td>{{ product.color }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.description }}</td>
                    <td>
                        <button type="button" @click="onEdit(index)">Edit</button>
                        <button type="button" @click="onDelete(index)">Delete</button>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="5">Total:</td>
                    <td>{{ total }}</td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            product: {
                image: null,
                brand: "",
                name: "",
                model: "",
                color: "",
                price: null,
                description: ""
            },
            products: [],
            selectedProductIndex: null,
            submitButtonText: "Add Product"
        };
    },
    computed: {
        total() {
            return this.products.reduce((acc, curr) => acc + curr.price, 0);
        }
    },
    methods: {
        loadFile(event) {
            this.product.image = URL.createObjectURL(event.target.files[0]);
            document.getElementById("output").src = this.product.image;
        },
        onFormSubmit() {
            if (this.selectedProductIndex === null) {
                this.addProduct();
            } else {
                this.updateProduct();
            }
            this.resetForm();
        },
        addProduct() {
            this.products.push({ ...this.product });
        },
        updateProduct() {
            this.products.splice(this.selectedProductIndex, 1, { ...this.product });
            this.selectedProductIndex = null;
            this.submitButtonText = "Add Product";
        },
        onEdit(td) {
            this.selectedProduct = {
                image: td.parentElement.parentElement.cells[0].querySelector("img").src,
                brand: td.parentElement.parentElement.cells[1].innerHTML,
                name: td.parentElement.parentElement.cells[2].innerHTML,
                model: td.parentElement.parentElement.cells[3].innerHTML,
                color: td.parentElement.parentElement.cells[4].innerHTML,
                price: td.parentElement.parentElement.cells[5].innerHTML,
                description: td.parentElement.parentElement.cells[6].innerHTML,
            };
            this.previousPrice = this.selectedProduct.price;
            this.totalPrize -= this.previousPrice;
            this.buttonLabel = "Update Product";
        },
    }
}
</script>
<style>
#output {
    width: 100px;
    height: 100px;
}

#B {
    color: aqua;
    text-align: center;
}

#body {
    border: 1px solid black;
    width: 600px;
    height: auto;
    padding: 50px;

}

#table {
    width: 100%;
    border: 1px solid black;
}

#table th {
    padding: 50px;
}
</style>
