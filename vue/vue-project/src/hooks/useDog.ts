import { ref, reactive, toRefs, toRef, computed, watch, watchEffect } from 'vue';
import { type personInter } from '@/types';
import axios from "axios"
export default function () {
    let dogList = ref<string[]>([

    ])
    async function addPic() {
        try {
            let result = await axios.get("https://dog.ceo/api/breed/pembroke/images/random")
            console.log(result.data.message)
            dogList.value.push(result.data.message)
        } catch (error) {
            alert(error)
        }
    }

    return {dogList,addPic}
}

