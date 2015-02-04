var Config;
(function() {

var config = {};

config.STAGE_X      = 10;
config.STAGE_Y      = 20;
config.BLOCK_SIZE   = 30;
config.BLOCK_COLORS = [];

if ( typeof Image === "undefined" ) {
    config.BLOCK_COLORS[1] = '#2836cc';
    config.BLOCK_COLORS[2] = '#c428cc';
    config.BLOCK_COLORS[3] = '#45cc28';
    config.BLOCK_COLORS[4] = '#cca828';
    config.BLOCK_COLORS[5] = '#3a0000';
    config.BLOCK_COLORS[6] = '#432020';
    config.BLOCK_COLORS[7] = '#cc9c28';
} else {
    [
        '',
        // red
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAIAAAC0Ujn1AAACT0lEQVR4Ae3WS24TXRAF4HObToIJYNgHG0HsCokNsAu2kOkf6d8JAyBJv++rHlS1ZRQxwI7JjByVStcDf7qullzdXl1dbzYXRGwhD4tHLXhIZI0hpdSUUinUmvvu6//KJMsoU29dc9SSlSqO1lXFv5IjLVOcxnHo/3v/sSUiU8L5RfPilVu7G4vAi4/Q3UUtWjPFJc2TuX0/LMvS1soyD03YhrPz5vK1i8aJhbX6+bDLpLWwu+PYd/0wdqnYTPzWNgeoNi+3dnfrqhKYAhWfySHYSok4x53bmRvzSFpKbpnZ56sCaHO5VfEfwf0Pn3taIPxnWkW05jxPU9/f9UO35JF1YdRaWhE1IojATyLL2H35jIen4/ObWEfSJLBiZqNFa4GrbJ3vvuOkDKn0FVFQFbTOqYVFWNdPsk7jNHpiL2PEvD29RkS1KpPkeBqdBdlF/Er72+OGyGk0A+Luffrx80Q/0f8ArYr96VFpc9Ui3olOg1i9moBwn3aUGcJK9S//nloT93qrqmBSIq2Zc8rLHE6ibwkz43kDDabvaa1FSuYU8+zruKOzIdeJkQ9tXQVIURS3Fd+qH0ixaXDR7LeMpEg5pvX94XYYbyL1BKOLQHAgZmXx+xZxWnYFo8k3eo2zuQav+7hMrEnACsXhNMBZ8DmQgtftNYvTvnZLqXEcfBDj1CXfm5FRjqZDWPUGG7jou3wdo5TSxph2br+6y/qgGUe5TgPPAiwaoA10pxtda1srXX/4tCzT+g5YiCoziSiOjqpaYxZmMoFLZqI327c/ARn2odbMxN2AAAAAAElFTkSuQmCC',
        // yellow
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABV0RVh0Q3JlYXRpb24gVGltZQAxNC4zLjMxRoRUyQAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAJ/SURBVEiJ7ZdLbtswEIY/O8rDCVqn98npCvQCvUJyiqwL9CZZxK2sl/UgZ8guhrIVIwvb8aZABhgIsqH5+JME5+fs+flXXCyuEVFUFRFBRAkhEEIkxshHwuoEVBXnPH3f45yQLRbXPDz8BgSogTI9O2AAPHAqPKQaHaoNfV/TNCWPj9/JRCQVvwa+JEiYPAOgJ8AD4IAB1ZZhaGiakqKoaNuWzHsFKmAJXAFf98A6eT8GKoAjhJZhqGmagqKoWa8dfd+PistUeJmUL998bDNyaMSUQgjdFrpe1+T5QFlGnBvIVBVb01HVMqmsgD9pUG367VCwra1Iw2ZTkufVFto04L0jCyGmwmGSNfDzCJXvx9UVFMUVq5WnLCNtC10HqkoWwrgJpuu5+jB0jKJw5Dm0LTgH3kOMkcz+HndtZDfN54mqsvQeQrCcgMGUemxDdWcD973l/jmUvX0dVYezgVVN5X7Mz0Y4Mj7Bn+BP8P8Pnpxc0zPtYz7rkJjvQGODkJTnCRHL/WMzKR5bogKeGDtms/OAxyZxeQlZBvMkdW72dTR8HSE0OLc5DxVYraCuzQA4Z00DIDOwI8aBEDqcq6nrkqK4pCg8VWUjfq/DvBcx2tQOA7y+wsvLzgDc3cHNzcSBxNihOhqzkr9/a1YrIc+tiQ/DbqSHhIgNtq7t2/H70QioirlMkU2CVskNOqoq0nVW5NjLxHxua7pYmFJVU13XBvbekdm1okpmuyHPzZhtNruRHguezeDiwsze7a3V2GwMHiM458i6rt9C12u/taB9f5rafXCMuxzh3nsy74Wnpx+0bZMuVA4Rj6pg1ve0sE0bUQ2oCs45nBsQEe7vv/EP4tgpLDuVls0AAAAASUVORK5CYII=',
        // lightgreen
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAIAAAC0Ujn1AAACPUlEQVR4Ae2VTY4jRRBG3wzp9jRofrgP10JijcQF5gpwilkjseUULPDgdlWWqzLjJ4MsVcuLWdBuq1donj+lauF6Dn2WMtKnT7+/ud+79Y/bireV6PAcojXvcVfRpRQVS9375w9/GJbJA0M/F5ZKVTS41t5oldpfnHzKJQ/T8OOvPyczU3TP/i1vg2i07exxPIhrvIJ09ezzVKfuHU/jPM/J1EfG97y/4+4d7y5qx7fnJ72GCTK3Odd8mk75lOVBainr1ANDEN3eZ+/n5duKPtEv0WPY0pZH70OuxxpDiNRk7pncaJvd8ZHxM58HhpnZ8f9Wby1PNg3nYTyOm5cJUUmtRVc02pZM/shHnktv83SnB129Myy4e4rWBLmUe+DATchJOLJ6BZSISIDjW2tbG9zGuAaFtoZNDTSaooYtLNxGWUNwIX3xdzcat+F88Wri5fmq/qr+/6uDuDy8pDqIy+oyjNsw1rxes5ECthu1R9ElFl5x+/W0g/RoTxFhWE+lllbOembPLRwgwz3sYUdsakFq1HW/SR7ysDvt9KSMUKA9sRwxqPA3/AUCCt/BG5p7aq31EhZf92bf8/mfbAfjCCNU8CsqLpChssahrTG3daOf7dy94zT2fSxHiTFYwCB4mtewg3tQcBDI0FCVJKJjGfu802nS47o3OW+/f536FXwDd/AtOJxBIBCRVJby6H1YvUxQLiM/Rx1bHu2qmlTtp99+Oc9TKUVF1NTdokVwNRFBNG/mptKpZvbhw/f/Aq8KNix5i2NJAAAAAElFTkSuQmCC',
        // blue
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAIAAAC0Ujn1AAACXklEQVR4Ae3VS24TQRAG4JqHHTtZRMBRkBDHRrDLGombsCDCnhlPv+pJ9dhRwiY4VlYopVKv0p9/VWdUzd3d9+12wywi7Ke3LmUGLypdyhVEyjn72W+3V0P3URpIClEgERQCYhCF83UzIAEkiFlCyNNh/vTuS1+TNrDqYHsFTqmBPbTWO2e5LDVNLhJjcXcch3gVeyJOAs0G+g6uXbfTD6iCCdgZrmiNnFHnWMZpnsYhhX3OqaYOWonrTc3up1W3BmGF522rXemCGjxvdfdh3lEZEbEXkUSnCdxsKhozTAFC8Qugz9N2mnKMPE5hGHbR3TwyzkTYq6oTZqcppwLffsDLa12mIUz3nlcoCicRcdpYFlrrOQa4rFIYMO3cVUUTMrMeYMnrLrteU19WXCbGSYXcstrWPz60LA9CF9IqWTm7CA/VP31uWMZ9WZmKmcKTauH1641+o/9j+vFDP5a9Lu2u1bO26MUfOntD0zZN+xetD5sF0QCaC2jh7N22K2j7o96amSxoIUhFY0a4qDDeMx6Ekwo6CWC9mdawbFj3G47jIQ9DjgOVSSWb6XOe1dsqpYRfef5pjq6oW9+AbUS0bplCVoqE457f/w6He0o7wkm5mMk/R6ycPa9KOf59TbNWEe6ZOWV29+DuuE9hx2USTqZ8zv+Lj7VpV22/7YRMZZnGAUzr2kWkOWTf84dpcBfzyBQ8gqmctxcc79pu3a2uzUTqXWQwxNKnlE5u3Nd9jLNyPjPyUW6g0gBW27yrTkQ9EX/+8DVu55wzIjKjiKjauTRUzQ+pxYjkeZnp9vb9H2CzqquGELfvAAAAAElFTkSuQmCC',
        // lightblue
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAIAAAC0Ujn1AAACWklEQVR4Ae3WT24zRRAF8Nfjtv2ZjygSd+AEHAZxPU6AWGbNAeAE7JAgwvN/pv9U1aN7TERgY8fKjjyVauX+qVVppcY/Pf10On0SUVUpvZRtIfGm2JaipJRDCKX70+n469ffKDErRq09GBIhxO04icR6cM46raEfp29//sHXmxIHh8+7ahlqp9WuBG92k2HNOodY3KHvlmXxOcukeNhh7/Dl7kLXrlo7b3CFyMQqNm3u2Hehb0NY661HBVH1g6udhBLZINdgbqVA2Nyu3Ldr1+6sU59S8qo6K8haDx5GTIo2Y9yGrrxOJ8McpZ/moT1fXFunnJM3s2D/THlWfP873p4Dui6cn6sbFsZVVQvNTJhCSyfOgvsShk6GM4ubEyWT9Hh5CTToNo37YvNQqqAwA22jtxhAVjranTRTYAyv35T/z9/EcG9UwX+d9njX/E/oD/qDJv4O+a40L8Xa9V6IKqXgGtc0r2hWUQkhghJwd/97cn7Pnb/onqRsdLLi2hIzcLyD1vbZltEdT+5whN8DLLRlFpd1v8XUD6N1XRo6m4d6EdqVpavCFKX9Q55/Q05OcmOfcfikat4KqsXV6bLnz3/GsoeGc6VzpF4bfqVDuW/9cYrOFLTGTFW8iCxZijuUPd+1od/QuFLlpudSxur3ZQ6N5OIxJ5tHmGWXfEp53L53pr6L/baPw8wcYXoTDeeaHfzBHb9wqihnJdnK5KNf1/XFbau7TIyBIre5VUazc/tDc9mvJDgzp8zsc5bvfvlxWabtGzCJJFU1I0DcFrI2rZHkctpFYX58/OovsY2FynrDbyoAAAAASUVORK5CYII=',
        // orange
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAIAAAC0Ujn1AAACR0lEQVR4Ae3VXW77RBQF8JNkkvxToIH9sDokNsAWYBV9RkJshAcCie3xx8z9xLeJSvtC0qhv9OjIyoP105FjedLT06+73VZE50hELeJz8J5YxGaEiEspRJJm9/vNb0iCmqEtLEMmSIUxbtfdoBU8ae3LkPvc/vz1D0lEsGKkLbbfAA638zUKvUkPlyBVaaxjP7tN243LMTEr0GGxx2qD7SMCDRqmUAP8umsCJQs3913TtPnUU9mVWA1rg9juEdv3L3fD+JrsURPj6eye2nzsa1ucqCZVBefL2C/7GFs7jH+htuARpldoN0iVqR+69th0xxxuT2CmZOZBuF1KGb//hHdmAzTt5tDx7I6MiaGqM21QQrga1+GAu9IMdBwxu6Rgg7snAIGaQ/zyNO5KV6NsMI8G/eoFYphAJtyVIlHHv0lv/5O5hruisRd4S39g/jf0J/1Ju7/8+FA6OL98sk1wV8Siy0X0FR2owuay87S4//OE9QppedGTx1KJajUuXIYt7slhRCbsErYJ6+ULreQyuxONObdt06ybkbsaK8zxH3GHGKrizwF/ZJCC1/jK8SXhcso4T0rP52Zu/z7lQ5bjiJmuCrXrj7hI7K1yud88qipJ5tTh2e2ez2Pqik8CsZteluUinu8uxV71GJ4p6Dh2ibgMXd+1Tdcfhzg3B44J6nBcz2KB1QKbFR6CxhB6bCKiNE3l7J7CjXO+3Dw5aGC1xAbwc2edQ2fmxCy/PP44pr48FCISYVUxc9wc9zBVTVUoUkXk2/13/wAuwGWy97igZQAAAABJRU5ErkJggg==',
        // purple
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAIAAAC0Ujn1AAACUUlEQVR4Ae3WT27rNhAG8JFM2Q7QNn1v+85ZoOfocbLuAXqDLNpdi9gSbYmcv/1kLlpvasfIrpl8ILiY/DigAjDp5eXXp/1ezUxRhvilIuhd5eFuDoZFylKwpqf97ttvX0NDs8ooWH1xr+7idLcegKvbYnKSOc95rL//NCdVC4l+16fv02o5aShaO+/CguI+lx20zLKcljzmcRrneU6iKpMMz0O/7dMPCX3tALhtf9MNjeBY3bzk40XmqVRep9ZRQUDH7FjR7eo99yFxw441oGWRkgtc/Ix1nGNmjmSgs7YB03MKC52U/2KcZ7OF3aDbLZdTwbSH6TDV6RznQkW4T+6+EqCdsOKY119e6f113B6PcoRbqTKx2TZ5hLMDbZfLfzI9VJlzpgxXSZGIIRFR+0sALyYyyWP0TDNiZA6JAkn/fGiJTjtf/DGaiRH6V6Wrb4LyeIxuw17TH1r/F/qT/qSDrjYfRsea8FhXfdA2MqSnvqOOGt3QsEskdNHHaCFBNrRBmp4CpWu8uhat5/oYPdK40LKl7UAD9D4CtDu7VcO8JZdpnI7DMUtGHxMHxX+/X0YmJHDf6A2bPe0R6MkdCVtMlst7jPctHw56yLTSaHXym1fMxK259QcF1k41qSqfeXWny3vMl/eY2Oiu/0JwrYnSjnbtfVFSHIPNRjgxyzzNmHc8jZNMcCvVdv6ddE9909uvQMe65ZqWgnsocLNkvMc482rku+mgaClUoItIEtE/fl7m87kUZiGVjdnWY1jb7q4+Irl1qr18N3BVlecfv/wN4W2ZJreJKGMAAAAASUVORK5CYII='
    ].forEach(function(base64, index) {
        if ( index > 0 ) {
            config.BLOCK_COLORS[index] = new Image();
            config.BLOCK_COLORS[index].src = base64;
        }
    });
}


// Server configuration
config.ICE_SERVER     = {'iceServers': [{'url': 'stun:stun.l.goolge.com:19302'}]};
config.HOST           = 'localhost';
config.HTTP_PORT      = 8889;
config.WEBSOCKET_PORT = 8124;

// Dummy accounts
config.dummyAccounts = [
    { profile_image_url: 'https://s3-ap-northeast-1.amazonaws.com/sugimoto/sample_accounts/sample1.png', screen_name: 'sample1' },
    { profile_image_url: 'https://s3-ap-northeast-1.amazonaws.com/sugimoto/sample_accounts/sample2.png', screen_name: 'sample2' },
    { profile_image_url: 'https://s3-ap-northeast-1.amazonaws.com/sugimoto/sample_accounts/sample3.png', screen_name: 'sample3' },
    { profile_image_url: 'https://s3-ap-northeast-1.amazonaws.com/sugimoto/sample_accounts/sample4.png', screen_name: 'sample4' },
    { profile_image_url: 'https://s3-ap-northeast-1.amazonaws.com/sugimoto/sample_accounts/sample5.png', screen_name: 'sample5' },
    { profile_image_url: 'https://s3-ap-northeast-1.amazonaws.com/sugimoto/sample_accounts/sample6.png', screen_name: 'sample6' }
];

Config = config;

// node config
if ( typeof exports !== 'undefined' ) {
    module.exports = config;
}


})();
