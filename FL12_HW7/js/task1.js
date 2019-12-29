let checkEmail = prompt('Enter email please');

if (checkEmail === '' || checkEmail === null) {
    alert('Canceled');
} else if (checkEmail.length < 5) {
    alert("I don't know any emails having name length less than 5 symbols");
} else if (checkEmail === 'user@gmail.com' || checkEmail === 'admin@gmail.com') {
    let checkPassword = prompt('Enter a password please');

    if (checkPassword === '' || checkPassword === null) {
        alert('Canceled');
    } else if (checkEmail === 'user@gmail.com' && checkPassword === 'UserPass' || 
                checkEmail === 'admin@gmail.com' && checkPassword === 'AdminPass') {
        alert('Logged in!');
        let changePasswordFlag = confirm('Do you want to change your password?');

            if (changePasswordFlag === true) {
                let checkOldPassword = prompt('Enter your old password please');

                if (checkOldPassword === '' || checkOldPassword === null) {
                    alert('Canceled');
                } else if (checkOldPassword === checkPassword) {
                    let newPassword = prompt('Enter your new password please');

                    if (newPassword === '' || newPassword === null) {
                        alert('Canceled');
                    } else if (newPassword.length < 6) {
                        alert('It’s too short password. Sorry');
                    } else {
                        let newPasswordCheck = prompt('Enter your new password please');
                        if (newPasswordCheck === newPassword) {
                            alert('You have successfully changed your password.');
                        } else {
                            alert('You wrote the wrong password');
                        }
                    }
                } else {
                    alert('Wrong password.');
                }

            } else {
                alert('You have failed the change');
            }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I dont know you!');
}