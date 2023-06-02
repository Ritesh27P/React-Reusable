// import PropTypes from "prop-types"
import classnames from "classnames"
// import './index.css';

const Button = ({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    rounded,
    outline,
    ...rest
}) => {

    const classes = classnames('flex items-center px-3 py-1.5 border text-white', {
        'border-blue-600 bg-blue-400': primary,
        'border-gray-1000 bg-gray-800': secondary,
        'border-green-600 bg-green-400': success,
        'border-yellow-600 bg-yellow-400': warning,
        'border-red-600 bg-red-400': danger, 
        'rounded-full': rounded,
        'bg-white text-black': outline && primary,
        'text-black bg-white': outline && secondary,
        'text-green-900 bg-white': outline && success,
        'text-yellow-900 bg-white': outline && warning,
        'text-red-900 bg-white': outline && danger,
    })

    return (
        <div className="">
            <button className={classes} {...rest}>{children}</button>
        </div>
    );
}

Button.propTypes = {
    checkVariationValue: ({primary, secondary, success, warning, danger}) => {
        const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger);
        console.log(count);
        if (count > 1) return new Error("It should be either primary, secondary, success, warning, danger not any 2.")
    }
}

export default Button;