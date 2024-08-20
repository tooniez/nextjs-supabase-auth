import { createClient } from "../supabase/server";

export async function editPersonalAccountName(prevState: any, formData: FormData) {
    "use server";

    const name = formData.get("name") as string;
    const accountId = formData.get("accountId") as string;
    const supabase = createClient();

    const { error } = await supabase.rpc('update_account', {
        name,
        account_id: accountId
    });

    if (error) {
        return {
            message: error.message
        };
    }
};