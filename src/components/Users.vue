<template>
    <div class="container">    
        <h3>Users:</h3>
        <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">name</th>
                        <th scope="col">email</th>
                        <th scope="col">country</th>
                    </tr>
                </thead>
        </table>
    </div>
</template>

<script>

export default {
    name: 'Users',
}

</script>

<style>
    h3{
        margin-bottom: 5%;
    }
</style>