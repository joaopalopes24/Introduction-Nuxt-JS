export default {
    getCategories(){
        return this.$axios.$get('categories');
    },
    addCategory(context, data){
        return this.$axios.$post('categories', data);
    },
    updateCategory(context, { id, data }){
        return this.$axios.$patch(`categories/${id}`, data);
    },
    deleteCategory(context, id){
        return this.$axios.$delete(`categories/${id}`);
    },
}