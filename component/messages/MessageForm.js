import { faImage, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/dist/client/router";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { SendMessages } from "../../redux/actions/SendMessages";

function MessageForm({ styles }) {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch()
    const onSubmit = (data) => {
        dispatch(SendMessages(data , router.query.room))
        reset();
    };

    return (
        <div className={styles.message_form}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" autoFocus {...register("message", { required: true })} />
                <button type="submit">
                    <FontAwesomeIcon icon={faPaperPlane} />
                </button>
            </form>
            <div>
                <label htmlFor="upload-photo">
                    <input
                        style={{ display: "none" }}
                        id="upload-photo"
                        name="upload-photo"
                        type="file"
                    />
                    <div>
                        <FontAwesomeIcon icon={faImage} />
                    </div>
                </label>
            </div>
        </div>
    );
}

export default MessageForm;
