<template>
    <div class="main-container">
        <label>{{ label }}</label>
        <div v-if="personData">
            <div class="main-content">
                <div v-for="(value, key) in personData" :key="key">
                    <p>
                        <p class="bold">{{ key }}:</p>
                        
                        <span v-if="isProjectOrTask(key)">
                            {{ getNameProjectInData(value) }}
                        </span>
                        
                        <span v-else-if="isAddressOrPhones(key)">
                            {{ formatAddressOrPhones(value) }}
                        </span>
                        <span v-else>
                            {{ value }}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        label: String,
        personData: Object,
        data: Object,
    },
    methods: {
        isProjectOrTask(key: string) {
            return key === "projects" || key === "notes";
        },
        isAddressOrPhones(key: string) {
            return key === "address" || key === "phones";
        },

        // Récupère le nom du projet, tâche ou note à partir de data
        getNameProjectInData(key: string | Array<string>) {
            if (Array.isArray(key)) {
                // si key est un tableau, on boucle et remplace les valeurs
                return key.map((k) => this.getNameProjectInData(k)).join(", ");
            }

            // récup datas pour un projet tache ou une note
            const item = this.data[key];
            if (item) {
                if (item.name) return item.name; 
                if (item.value) return item.value; 
            }
            return key; // si ce n'est ni un tableau ni un objet, on retourne la valeur initial
        },

        formatAddressOrPhones(value: any) {
            if (Array.isArray(value)) {
                return value
                    .map((phone: any) => `${phone.type}: ${phone.number}`)
                    .join(", ");
            } else if (typeof value === "object") {
                return `${value.street}, ${value.city}, ${value.state} ${value.zip}`;
            }
            return value; // si ce n'est ni un tableau ni un objet, on retourne la valeur initial
        },
    },
};
</script>

<style scoped lang="scss">
$bg-primary: #f4edea;

.main-container {
    color: rgb(12, 12, 12);
    background-color: rgb(250, 250, 250);
    padding: 1rem;
    border-radius: 25px;
    text-transform: capitalize;
    gap: 2rem;
    display: flex;
    flex-direction: column;

    label {
        text-transform: uppercase;
        font-size: 24px;
    }

    .main-content {
        text-transform: capitalize;
        text-align: left;
        gap: 1rem;
    display: flex;
    flex-direction: column;
    }
    p {   
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: .5rem;
        margin: 0;
        .bold {
             font-weight: bolder;
            }  
    }
    
}
</style>
