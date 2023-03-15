<template>
    <div>
      <img :src="selectedRow.cells[0].querySelector('img').src" ref="output" />
      <form @submit.prevent="updateData">
        <input v-model="formData.p_bRand" type="text" placeholder="Brand" />
        <input v-model="formData.p_nAme" type="text" placeholder="Name" />
        <input v-model="formData.p_Model" type="text" placeholder="Model" />
        <input v-model="formData.p_color" type="text" placeholder="Color" />
        <input v-model="formData.prize" type="number" placeholder="Price" />
        <textarea v-model="formData.textarea" placeholder="Description"></textarea>
        <button type="submit">{{ submitBtnText }}</button>
      </form>
      <p>Total price: {{ totalPrize }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedRow: null,
        previousPrize: null,
        totalPrize: null,
        formData: {
          p_bRand: "",
          p_nAme: "",
          p_Model: "",
          p_color: "",
          prize: "",
          textarea: "",
        },
        submitBtnText: "Add Product",
      };
    },
    methods: {
      onEdit(td) {
        this.selectedRow = td.parentElement.parentElement;
        this.previousPrize = this.selectedRow.cells[5].innerHTML;
        this.totalPrize = this.totalPrize - this.previousPrize;
        this.$refs.output.src = this.selectedRow.cells[0].querySelector("img").src;
        this.formData.p_bRand = this.selectedRow.cells[1].innerHTML;
        this.formData.p_nAme = this.selectedRow.cells[2].innerHTML;
        this.formData.p_Model = this.selectedRow.cells[3].innerHTML;
        this.formData.p_color = this.selectedRow.cells[4].innerHTML;
        this.formData.prize = this.selectedRow.cells[5].innerHTML;
        this.formData.textarea = this.selectedRow.cells[6].innerHTML;
        this.submitBtnText = "Update Product";
        this.totalPrize = this.totalPrize;
      },
      updateData() {
        let oldImg = this.selectedRow.cells[0].querySelector("img");
  
        // Create a new img element
        let Newimage = document.createElement("img");
        Newimage.src = URL.createObjectURL(x);
        Newimage.alt = "New image description";
        Newimage.width = 100;
  
        // Replace the existing img element with the new one
        this.selectedRow.cells[0].replaceChild(Newimage, oldImg);
        this.selectedRow.cells[1].innerHTML = this.formData.p_bRand;
        this.selectedRow.cells[2].innerHTML = this.formData.p_nAme;
        this.selectedRow.cells[3].innerHTML = this.formData.p_Model;
        this.selectedRow.cells[4].innerHTML = this.formData.p_color;
        this.selectedRow.cells[5].innerHTML = this.formData.prize;
        this.selectedRow.cells[6].innerHTML = this.formData.textarea;
        this.totalPrize += parseInt(this.formData.prize);
        this.selectedRow = null; // reset selectedRow
        this.submitBtnText = "Add Product";
        this.totalPrize = this.totalPrize;
      },
    },
  };
  </script>
  