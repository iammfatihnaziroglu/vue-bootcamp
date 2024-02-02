import { ref, computed} from "vue";

export default function (){
    const title = ref("This is a Title!");
    const titleLengthMessage = computed(() => {
        return title.value.length + "character length of the message";
      }); 
    return{
        title,
        titleLengthMessage
    }
}