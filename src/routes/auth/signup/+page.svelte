<script lang="ts">
    let tabSet: number = 1; // default to signup

    let email = '';
    let password = '';
    let confirmPassword = '';
    let passwordsMatch = true;

    const handleSignUp = () => {
        if (password !== confirmPassword) {
            passwordsMatch = false;
            return;
        }

    };


    // const passwordToggle = document.querySelector('.js-password-toggle')

    // // passwordToggle.addEventListener('change', function() {
    // // const password = document.querySelector('.js-password'),
    // //     passwordLabel = document.querySelector('.js-password-label')

    // // if (password.type === 'password') {
    // //     password.type = 'text'
    // //     passwordLabel.innerHTML = 'hide'
    // // } else {
    // //     password.type = 'password'
    // //     passwordLabel.innerHTML = 'show'
    // // }

    // // password.focus()
    // // })

</script>


<div class="flex justify-center items-center h-screen">
    <card class="w-full max-w-md p-6">
        <form on:submit|preventDefault={handleSignUp} class="space-y-4">
            <input class="w-full text-black"
                type="email" 
                bind:value={email} 
                placeholder="Email" 
                required 
            />

            <input class="w-full text-black"
                type="password" 
                bind:value={password} 
                placeholder="Password" 
                required 
            />

            <input type="button" value="Show" class="js-password-toggle" /> 
        </form> 

        
    </card>
</div>
